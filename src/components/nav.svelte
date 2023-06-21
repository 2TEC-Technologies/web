<!-- Main navbar -->
<div
    class="block lg:flex box-border bg-nav-bg items-center justify-between border-b border-gb h-[48px]"
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
        <div class="block text-base lg:text-sm lg:hidden self-center">
            <img src="/burger-nav.svg" alt="" srcset="" />
        </div>
    </div>
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

    .nav {
        display: flex;
        justify-content: space-between;
        padding: 10px 36px;
        width: 100%;
        max-width: var(--sizes-pageWidth);
        margin: 0px auto;
        position: relative;
        z-index: 99999;
    }

    .p-button {
        padding: 4px 16px;
    }
</style>
