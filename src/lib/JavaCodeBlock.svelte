<script>
    import CodeBlock from "$lib/CodeBlock.svelte";
    import java from "svelte-highlight/languages/java";
                    
    export let code;
    export let header;
    export let icon;
</script>

<CodeBlock language={java} code={code} header={header} icon={icon}></CodeBlock>