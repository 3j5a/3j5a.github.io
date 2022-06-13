<script>
    import { page } from '$app/stores';
                                                
    const measurementId = "G-T3G7PPSBNV"

    $: {
        if (typeof gtag !== "undefined") {
            gtag("config", measurementId, {
                page_path: $page.url.href
            });
        }
    }
</script>

<svelte:head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={measurementId}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag("js", new Date());
    </script>
</svelte:head>
