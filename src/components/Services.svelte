<script>
    import { getContext } from 'svelte'
    const data = getContext('data')
</script>


<section class="py-12 px-4"><h2 class="text-4xl mb-2 text-center leading-tight font-heading">Services</h2>
    <p class="text-center mb-12 text-gray-500">Let’s open a new chapter of your paper adventure!</p>
    <div>
        <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8"><img class="w-4/5 mx-auto"
                                                 src="placeholders/pictures/sprint.svg" alt=""></div>
            <div class="md:w-1/2 px-8 mb-8">
                <span class="text-6xl">Consult</span>
                <h3 class="text-2xl mb-3 font-heading">Evaluate</h3>
                <p class="text-gray-500 leading-relaxed">During the phone call we will be able to present you all details of cooperation, pricing and special offers, suited for your company.</p>
            </div>
        </div>
        <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8 md:order-1"><img class="w-4/5
            mx-auto" src="placeholders/pictures/blocks.svg" alt=""></div>
            <div class="md:w-1/2 px-8 md:text-right">
                <span class="text-6xl">Build</span>
                <h3 class="text-2xl mb-3 font-heading">Software</h3>
                <p class="text-gray-500 leading-relaxed">We can also talk during business meeting, or visit your office anytime you want! Our employees will provide proper contracts.</p>
            </div>
        </div>
        <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8 order-none"><img class="w-4/5
            mx-auto" src="placeholders/pictures/data_processing.svg"
                                                            alt=""></div>
            <div class="md:w-1/2 px-8">
                <span class="text-6xl">Collect</span>
                <h3 class="text-2xl mb-3 font-heading">Data</h3>
                <p class="text-gray-500 leading-relaxed">You don’t buy a pig... or shall I say a paper in a poke. The supplies will be delivered to your company every first Monday of the month.</p>
            </div>
        </div>
        <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8 order-none">
                <img class="w-4/5 mx-auto" src="placeholders/pictures/ai_robot.svg" alt=""></div>
            <div class="md:w-1/2 px-8">
                <span class="text-6xl">Automate</span>
                <h3 class="text-2xl mb-3 font-heading">Process</h3>
                <p class="text-gray-500 leading-relaxed">You don’t buy a pig... or shall I say a paper in a poke. The supplies will be delivered to your company every first Monday of the month.</p>
            </div>
        </div>
    </div>
</section>