<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import javascript from "svelte-highlight/languages/javascript";
                            
    export let code;
    export let header;
    export let icon;
</script>

<CodeBlock language={javascript} code={code} header={header} icon={icon}></CodeBlock>