<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import javascript from "svelte-highlight/languages/javascript";
                        
    export let code;
    const prefix = "> ";

</script>

<CodeBlock language={javascript} code={prefix + code}></CodeBlock>