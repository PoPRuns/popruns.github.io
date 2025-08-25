using System.Text;

namespace PoprunsBlazorPages.Pages.Pop2008.ComboGenerator;

public static class Generator
{
    public const int MinHp = 13;

    public static string GetCombos(int hp, Enemy enemy, bool canStartWithB0 = true)
    {
        if (hp % 2 != 0)
            hp++;
        if (hp < MinHp)
            throw new NotSupportedException($"HP must be at least {MinHp}");

        if (hp < 26)
            return GetCombosSmall(hp);

        int r = hp % 26;

        bool basic =
            r == 0 ||
            enemy == Enemy.Hunter ||
            enemy == Enemy.Concubine ||
            r > 12 ||
            canStartWithB0;
        if (basic)
            return GetCombosBasic(hp, canStartWithB0);

        if (r == 4 || r == 6 || hp == 28)
            return Serialize([new("B2", hp / 26 - 1), new("A1**")]);
        if (r == 8)
            return Serialize([new("B2", hp / 26 - 1), new("B2*")]);
        if (r == 2)
            return Serialize([new("B1"), new("B2", hp / 26 - 2), new("B2*")]);

        // 10 <= r <= 12, hp > 26
        int comboCount = hp / 26 + 1;
        int b1Count = (26 * comboCount - hp) / 6; // always 0, 1, or 2
        int b2Count = comboCount - b1Count;
        return Serialize([new("B1", b1Count), new("B2", b2Count)]);
    }

    private static string GetCombosSmall(int hp)
        => hp switch
        {
            <= 20 => Serialize([new("B1")]),
            <= 26 => Serialize([new("B2")]),
            _ => throw new Exception("Internal error: small hp must be at most 26")
        };

    private static string GetCombosBasic(int hp, bool canStartWithB0)
    {
        if (hp < 26)
            return GetCombosSmall(hp);
        if (hp % 26 == 0)
            return Serialize([new("B2", hp / 26)]);
        int comboCount = hp / 26 + 1;
        int b0Count = (26 * comboCount - hp) / 14; // always 0 or 1
        int b1Count = (26 * comboCount - 14 * b0Count - hp) / 6; // always 0, 1, or 2 (but at most 1 if b0Count is 1)
        int b2Count = comboCount - b0Count - b1Count;
        return canStartWithB0 ?
            Serialize([new("B0", b0Count), new("B1", b1Count), new("B2", b2Count)]) :
            Serialize(GetCombosB0Second(new("B0", b0Count), [new("B1", b1Count), new("B2", b2Count)]));
    }

    private static string Serialize(IEnumerable<MultiCombo> multiComboStream)
    {
        MultiCombo[] multiCombos = [..multiComboStream.Where(multiCombo => multiCombo.Count > 0)];
        StringBuilder builder = new();
        int buffer = 0;
        for (int i = 0; i < multiCombos.Length; i++)
        {
            (string combo, int count) = multiCombos[i];
            count += buffer;
            buffer = 0;
            if (i < multiCombos.Length - 1 && multiCombos[i + 1].Combo == combo)
            {
                buffer = count;
                continue;
            }
            builder.Append(combo);
            if (count > 1)
            {
                builder.Append('^');
                builder.Append(count);
            }
            builder.Append(' ');
        }
        while (builder.Length > 0 && char.IsWhiteSpace(builder[^1]))
            builder.Remove(builder.Length - 1, 1);
        return builder.ToString();
    }

    private static IEnumerable<MultiCombo> GetCombosB0Second(MultiCombo b0MultiCombo, IEnumerable<MultiCombo> otherMultiCombos)
    {
        bool b0MultiComboAdded = false;
        foreach (MultiCombo multiCombo in otherMultiCombos)
        {
            if (b0MultiComboAdded)
            {
                yield return multiCombo;
                continue;
            }
            if (multiCombo.Count < 1)
            {
                yield return multiCombo;
                continue;
            }
            yield return new(multiCombo.Combo, 1);
            yield return b0MultiCombo;
            yield return new(multiCombo.Combo, multiCombo.Count - 1);
            b0MultiComboAdded = true;
        }
        if (b0MultiComboAdded)
            yield break;
        yield return b0MultiCombo;
    }
}