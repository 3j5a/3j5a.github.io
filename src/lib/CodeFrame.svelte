<script>
    export let style;
</script>

<div style="{style}" class="frame">
    <slot></slot>
    {#if $$slots.output}
        <div class="output">
            <slot name="output"></slot>
        </div>
    {/if}
</div>

<style>
    .frame {
        height: fit-content;
        width: fit-content;
        border: 0.25em solid var(--code-frame-color);
        margin-top: 0.25em;
    }

    .output {
        border-top: 0.35em solid var(--code-frame-color);
    }

</style>
