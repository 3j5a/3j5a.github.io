<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import llvm from "svelte-highlight/languages/llvm";
                        
    export let code;

</script>

<CodeBlock language={llvm} code={code}></CodeBlock>