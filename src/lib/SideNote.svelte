<script>
    export let style;
</script>

<aside style="{style}">
    <slot></slot>
</aside>

<style>
    aside {
        padding: 0.5em;
        margin-top: 0.25em;
        font-size: 0.8em;
        background-color: var(--aside-bacground-color);
        height: fit-content;
        width: fit-content;
    }

</style>

