<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"
    const data = getContext("data")
</script>

<section class="py-12 px-4">
    <Title title="contact"/>
    <div class="flex flex-wrap items-center -mx-6">
        <div class="w-full lg:w-1/2 px-6 lg:px-24 mb-8 lg:mb-0"><img
                src="placeholders/pictures/new_ideas.svg" alt=""></div>
        <div class="w-full lg:w-1/2 px-6">
            <form>
                <div class="mb-4">
                    <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                           type="email" placeholder="Email"></div>
                <div class="mb-4"><select
                        class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
                    <option>-- Select product --</option>
                    <option>Product 1</option>
                    <option>Product 2</option>
                    <option>Product 3</option>
                </select></div>
                <div class="mb-4"><textarea
                        class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                        placeholder="Write something..." rows="5"></textarea>
                </div>
                <div>
                    <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>