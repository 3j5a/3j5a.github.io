<script>
    import { base } from '$app/paths';
  </script>

<header>
    <h3>
        <div class="logo">
            <a href="{base}/">
                <mark>j</mark>ava <mark>j</mark>avascript <mark>j</mark>ulia
            </a>
            <br/>
            <a href="{base}/">
                j<mark>a</mark>v<mark>a</mark> j<mark>a</mark>v<mark>a</mark>script juli<mark>a</mark>
            </a>
        </div>
        <div class="about">
            <a href="{base}/about">about</a>
        </div>
    </h3>
</header>    

<style>
    header {
        border-bottom: 1px solid var(--header-color);
    }

    .logo a, .about a {
        color: var(--header-color);
        text-decoration: none;
    }

    .logo mark {
        color: black;
        background-color: initial;
    }

    .about {
        margin-top: 0.55em;
    }

    h3 {
        margin-bottom: 0.5em;
        display: flex;
        justify-content: space-between;
    }
</style>
