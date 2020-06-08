<script>
    import { getContext } from 'svelte'
    const data = getContext('data')
</script>

<nav class="flex flex-wrap items-center justify-between p-4">
    <div class="flex flex-shrink-0 mr-6"><a class="text-xl text-indigo-500 font-semibold" href="#">{data.general.name}</a></div>
    <div class="block lg:hidden">
        <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
        <svg class="fill-current h-3 w-3" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        </button>
    </div>
    <div class="navbar-menu hidden w-full lg:flex lg:flex-grow lg:items-center lg:w-auto">
        <div class="lg:ml-auto"><a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="#">Services</a><a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="#">Projects</a><a class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="#">Articles</a></div>
    </div>
</nav>