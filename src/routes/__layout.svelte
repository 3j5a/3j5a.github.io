<script>
    import Analytics from "$lib/Analytics.svelte";
    import Header from "$lib/Header.svelte";
    import { dev } from '$app/env';
    import "../app.css";
    </script>

<svelte:head>
</svelte:head>

<Header/>
{#if !dev}
    <Analytics/>
{/if}
<slot></slot>