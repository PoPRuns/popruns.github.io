using Microsoft.JSInterop;

namespace PoprunsBlazorPages.Pages;

public static class JsUtils
{
    public static async Task SetFavicon(this IJSRuntime js, string href) => await js.InvokeVoidAsync("setFavicon", href);
}