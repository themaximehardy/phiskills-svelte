<script>
    import {getContext} from "svelte"

    const data = getContext("data")

    const fetchFeed = (async () => {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https:%2F%2Fmedium.com%2Ffeed%2Fphi-skills")
        return await response.json()
    })()
</script>

<section class="pt-8 px-4 pb-4">
    <h2 class="text-3xl mb-8 font-heading">Latest posts</h2>
    <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-3 font-heading">Understanding the
                        paper</h3>
                    <p class="text-gray-500">So you think you know everything
                        about paper? False, you know nothing. Let me illuminate
                        your first steps into my world.</p>
                </div>
            </a></div>
        </div>
        <div class="w-full lg:w-2/4 px-4 mb-8">
            <div class="hidden lg:block relative rounded shadow-md bg-cover h-full"
                 style="background-image: url('placeholders/pictures/work.jpg')">
                <a href="#"><span
                        class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span>
                    <div class="p-6 flex items-end h-full text-white">
                        <div>
                            <h3 class="text-2xl mb-2 font-heading">Being world’s
                                best boss</h3>
                            <p>The wise man once said: "Friend first, boss
                                second, entertainer third". That man was me.</p>
                        </div>
                    </div>
                </a></div>
            <div class="lg:hidden relative rounded shadow-md pb-6 h-full"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/work.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-3 font-heading">Being world’s best
                        boss</h3>
                    <p class="text-gray-500">The wise man once said: "Friend
                        first, boss second, entertainer third". That man was
                        me.</p>
                </div>
            </a></div>
        </div>
        <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-2 font-heading">Dwight doesn’t
                        understand the paper</h3>
                    <p class="text-gray-500">Read it and finally find out that
                        Dwight Schrute is merely a scammer.</p>
                </div>
            </a></div>
        </div>
        <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/work.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-2 font-heading">Why motorcycles are
                        the best cars ever</h3>
                    <p class="text-gray-500">A few of my thoughts about cars,
                        car accidents and life in the Dunder Mifflin Scranton
                        office.</p>
                </div>
            </a></div>
        </div>
        <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-3 font-heading">Life & biznness</h3>
                    <p class="text-gray-500">Struggling to make ends meet?
                        Selling guns and paper is the best solution.</p>
                </div>
            </a></div>
        </div>
        <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/work.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-3 font-heading">Why I shouldn’t have
                        shown Creed how to set up a blog</h3>
                    <p class="text-gray-500">He hides horrific things in his
                        mind.</p>
                </div>
            </a></div>
        </div>
        <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a
                    href="#"><span
                    class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img
                    class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                    <h3 class="text-xl mb-3 font-heading">Office meeting on the
                        beach</h3>
                    <p class="text-gray-500">The history of how I ate 55 hot
                        dogs and one fish in 15 minutes and beat world record.
                        Also, our receptionist was saying some stuff.</p>
                </div>
            </a></div>
        </div>
    </div>
</section>