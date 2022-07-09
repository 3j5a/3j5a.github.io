<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import assembler from "svelte-highlight/languages/x86asm";
                        
    export let code;

</script>

<CodeBlock language={assembler} code={code}></CodeBlock>