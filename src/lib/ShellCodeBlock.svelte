<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import shell from "svelte-highlight/languages/shell";
                        
    export let code;
    const prefix = "➜ ✗ ";

</script>

<CodeBlock language={shell} code={prefix + code}></CodeBlock>