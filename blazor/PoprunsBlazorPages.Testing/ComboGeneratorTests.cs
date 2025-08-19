using PoprunsBlazorPages.Pages.Pop2008.ComboGenerator;
using System;
using static PoprunsBlazorPages.Pages.Pop2008.ComboGenerator.Generator;

namespace PoprunsBlazorPages.Testing;

public static class ComboGeneratorTests
{
    private static readonly Enemy[] _allEnemies = [Enemy.Hunter, Enemy.Concubine, Enemy.Alchemist, Enemy.Dad];
    private static readonly Enemy[] _allBasicEnemies = [Enemy.Hunter, Enemy.Concubine];
    private static readonly Enemy[] _allNonBasicEnemies = [Enemy.Alchemist, Enemy.Dad];

    [Fact]
    public static void GetCombos_TooSmall_ThrowsException()
    {
        int hpMin = -10;
        int hpMax = 12;

        for (int i = hpMin; i <= hpMax; i++)
        {
            foreach (Enemy enemy in _allEnemies)
            {
                void GetCombos1() => GetCombos(i, enemy, false);
                void GetCombos2() => GetCombos(i, enemy, true);

                Assert.ThrowsAny<Exception>(GetCombos1);
                Assert.ThrowsAny<Exception>(GetCombos2);
            }
        }
    }

    [Theory]
    [InlineData(13, 20, "B1")]
    [InlineData(21, 26, "B2")]
    public static void GetCombos_SmallValuesTest(int hpMin, int hpMax, string expectedCombos)
    {
        for (int i = hpMin; i <= hpMax; i++)
        {
            foreach (Enemy enemy in _allEnemies)
            {
                string combos1 = GetCombos(i, enemy, false);
                string combos2 = GetCombos(i, enemy, true);

                Assert.Equal(expectedCombos, combos1);
                Assert.Equal(expectedCombos, combos2);
            }
        }
    }

    [Theory]
    [InlineData(27, 32, "B0 B1", "B1 B0")]
    [InlineData(33, 38, "B0 B2", "B2 B0")]
    [InlineData(39, 40, "B1^2", "B1^2")]
    [InlineData(41, 46, "B1 B2", "B1 B2")]
    [InlineData(47, 52, "B2^2", "B2^2")]
    [InlineData(53, 58, "B0 B1 B2", "B1 B0 B2")]
    [InlineData(59, 64, "B0 B2^2", "B2 B0 B2")]
    [InlineData(65, 66, "B1^2 B2", "B1^2 B2")]
    [InlineData(67, 72, "B1 B2^2", "B1 B2^2")]
    [InlineData(73, 78, "B2^3", "B2^3")]
    [InlineData(79, 84, "B0 B1 B2^2", "B1 B0 B2^2")]
    [InlineData(85, 90, "B0 B2^3", "B2 B0 B2^2")]
    [InlineData(91, 92, "B1^2 B2^2", "B1^2 B2^2")]
    [InlineData(93, 98, "B1 B2^3", "B1 B2^3")]
    [InlineData(99, 104, "B2^4", "B2^4")]
    public static void GetCombos_BasicValuesTest(int hpMin, int hpMax, string expectedCombosB0Start, string expectedCombosNoB0Start)
    {
        for (int i = hpMin; i <= hpMax; i++)
        {
            foreach (Enemy enemy in _allBasicEnemies)
            {
                string combosB0Start = GetCombos(i, enemy, true);
                string combosNoB0Start = GetCombos(i, enemy, false);

                Assert.Equal(expectedCombosB0Start, combosB0Start);
                Assert.Equal(expectedCombosNoB0Start, combosNoB0Start);
            }
            foreach (Enemy enemy in _allNonBasicEnemies)
            {
                string combosB0Start = GetCombos(i, enemy, true);

                Assert.Equal(expectedCombosB0Start, combosB0Start);
            }
        }
    }

    [Theory]
    [InlineData(27, 32, "A1**")]
    [InlineData(33, 34, "B2*")]
    [InlineData(35, 40, "B1^2")]
    [InlineData(41, 46, "B1 B2")]
    [InlineData(47, 52, "B2^2")]
    [InlineData(53, 54, "B1 B2*")]
    [InlineData(55, 58, "B2 A1**")]
    [InlineData(59, 60, "B2 B2*")]
    [InlineData(61, 66, "B1^2 B2")]
    [InlineData(67, 72, "B1 B2^2")]
    [InlineData(73, 78, "B2^3")]
    [InlineData(79, 80, "B1 B2 B2*")]
    [InlineData(81, 84, "B2^2 A1**")]
    [InlineData(85, 86, "B2^2 B2*")]
    [InlineData(87, 92, "B1^2 B2^2")]
    [InlineData(93, 98, "B1 B2^3")]
    [InlineData(99, 104, "B2^4")]
    public static void GetCombos_NonBasicValuesTest(int hpMin, int hpMax, string expectedCombos)
    {
        for (int i = hpMin; i <= hpMax; i++)
        {
            foreach (Enemy enemy in _allNonBasicEnemies)
            {
                string combos = GetCombos(i, enemy, false);

                Assert.Equal(expectedCombos, combos);
            }
        }
    }
}