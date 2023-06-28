<!-- JS code -->
<script>
    let isMenuOpen = false;
    let hButton;

    function showMenu() {
        isMenuOpen = !isMenuOpen;
        console.log(isMenuOpen);
    }
</script>

<!-- Main navbar -->
<div
    class="z-50 block sticky top-0 lg:flex box-border bg-nav-bg items-center justify-between border-b border-gb h-[48px]"
>
    <!-- Contenedor principal (para centrarlo)-->
    <div class="nav items-center align-center h-full">
        <div class="flex align-center">
            <h1 class="antialiased text-nav-h text-base lg:text-sm font-bold">
                <a href="/">2TEC</a>
            </h1>
        </div>

        <!-- Navbar normal-->
        <div class="hidden lg:block">
            <ul
                class="flex text-base lg:text-sm items-center justify-end gap-6 content-center"
            >
                <li class="antialiased text-nav-text">
                    <a href="/about">About Us</a>
                </li>
                <li class="antialiased text-nav-text">
                    <a href="/news">News</a>
                </li>
                <li class="antialiased text-nav-text">
                    <a href="/work">Work</a>
                </li>
                <a href="/contact"
                    ><li
                        class="antialiased rounded-full text-p-button-dark self-center p-button bg-p-button-bg"
                    >
                        Contact
                    </li></a
                >
            </ul>
        </div>

        <!-- Navbar responsive (burguer menu)-->
        <div
            class="block text-base lg:text-sm lg:hidden self-center cursor-pointer items-center"
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span class="text-nav-text text-3xl">
                <ion-icon
                    bind:this={hButton}
                    class="nav-button"
                    name="menu-outline"
                    on:click={showMenu}
                />
            </span>
        </div>
    </div>
</div>

<!-- onClick menu hamburguer menu -->
<div class:open={isMenuOpen} class="h-menu">
    <ul class="flex flex-col pl-8 gap-4 pt-4">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="text-nav-text" on:click={() => (isMenuOpen = false)}>
            <a href="/about">About</a>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="text-nav-text" on:click={() => (isMenuOpen = false)}>
            <a href="/news">News</a>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="text-nav-text" on:click={() => (isMenuOpen = false)}>
            <a href="/work">Work</a>
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="text-nav-text" on:click={() => (isMenuOpen = false)}>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</div>

<!-- News navbar -->
<div
    class="block text-base lg:text-sm lg:flex box-border bg-nav-bg items-center justify-between border-b border-gb"
>
    <div class="nav items-center align-center">
        <h3 class="text-nav-text antialiased">News title</h3>
        <a href="https://www.google.com" class="text-p-button-bg antialiased"
            >Learn more</a
        >
    </div>
</div>

<!-- Estilos -->
<style is:global>
    :root {
        --sizes-pageWidth: 1200px;
    }

    .h-menu {
        display: none;
    }

    .h-menu.open {
        display: block;
        position: fixed;
        height: 100vh;
        width: 100vh;
        z-index: 300;
        background-color: #090909;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        padding: 10px 36px;
        width: 100%;
        max-width: var(--sizes-pageWidth);
        margin: 0px auto;
        position: relative;
    }

    .p-button {
        padding: 4px 16px;
    }
</style>
