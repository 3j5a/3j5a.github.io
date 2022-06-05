<script>
    import { Highlight } from "svelte-highlight";
    import grayscale from "svelte-highlight/styles/grayscale";
                
    export let language;
    export let code;

</script>

<svelte:head>
  {@html grayscale}
</svelte:head>

<Highlight language={language} code={code} />    
