<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"
    const data = getContext("data")
</script>

<section class="py-8 px-4">
    <Title title="work in action" />
    <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md">
                <img class="w-1/3 mb-4" src="placeholders/logos/realweb.svg"
                     alt="">
                <img src="placeholders/pictures/office.jpg" alt=""
                     class="rounded shadow-md mb-2 md:mb-3">
                <p class="mb-4">Michael, the Manager? I swear, that man can
                    really close deals with people. Such a nice contact,
                    great quality products, professional service. And God
                    knows, that company is fun at parties.</p>
                <p class="text-sm mb-12 text-gray-500">The Good Apparel</p>
                <a class="mt-auto text-blue-700 hover:underline" href="#">Read
                    the case study »</a>
            </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md">
                <img class="w-1/3 mb-4" src="placeholders/logos/plucky.svg"
                     alt="">
                <img src="placeholders/pictures/office.jpg" alt=""
                     class="rounded shadow-md mb-2 md:mb-3">
                <p class="mb-4">You know, mistakes happen. In the end, we
                    are only people, right? The Manager recorder an apology
                    video for me and gave me 6 months of free products.
                    That’s the way you deal with stressful situations.</p>
                <p class="text-sm mb-12 text-gray-500">Event Driven Data
                    Engineering Platform</p>
                <a class="mt-auto text-blue-700 hover:underline" href="#">Read
                    the case study »</a>
            </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md">
                <img class="w-1/3 mb-4"
                     src="placeholders/logos/gitscape.svg" alt="">
                <img src="placeholders/pictures/office.jpg" alt=""
                     class="rounded shadow-md mb-2 md:mb-3">
                <p class="mb-4">Great offer, competitive prices,
                    professional service. That’s how I’d remember the Dunder
                    Mifflin. Although I had to switch paper provider,
                    sometimes</p>
                <p class="text-sm mb-12 text-gray-500">3D Process
                    Automation</p>
                <a class="mt-auto text-blue-700 hover:underline" href="#">Read
                    the case study »</a>
            </div>
        </div>
    </div>
</section>
