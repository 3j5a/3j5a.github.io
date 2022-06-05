<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import java from "svelte-highlight/languages/java";
                    
    export let code;
    
</script>

<CodeBlock language={java} code={code}></CodeBlock>