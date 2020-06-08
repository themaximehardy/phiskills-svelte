<script>
    import { setContext } from 'svelte'
    import Nav from "./components/Nav.svelte"

    export let data = {}
    setContext('data', data)
</script>

<main>
    <div class="container mx-auto px-4">
      <Nav />
      <section class="py-12 px-4 text-center">
        <div class="w-full max-w-2xl mx-auto"><span class="text-sm font-semibold">TAGLINE</span>
          <h2 class="text-5xl mt-2 mb-6 leading-tight font-heading">END TO END SOFTWARE DEVELOPMENT FOR ENDLESS GROWTH</h2>
          <p class="mb-8 text-gray-500 leading-relaxed">We craft software that is scalable, secure and flexible.</p>
          <div><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Contact Us</a><a class="text-blue-700 hover:underline" href="#">Learn more</a></div>
        </div>
      </section>
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-3">
          <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Great quality</h3>
            <p class="text-gray-500 leading-relaxed">Our paper is literally tempting you to print something.</p>
          </div>
          <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Fast delivery</h3>
            <p class="text-gray-500 leading-relaxed">Business in need? We can prepare next-day delivery if necessary.</p>
          </div>
          <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Attractive discounts</h3>
            <p class="text-gray-500 leading-relaxed">Every customer gets 10% discount on the other paper supplies.</p>
          </div>
          <div class="md:w-1/4 px-3 mb-6 md:mb-0">
            <h3 class="text-xl mb-1 md:mb-3 font-heading">Help at any time</h3>
            <p class="text-gray-500 leading-relaxed">Our consultants are ready to serve at any hour.</p>
          </div>
        </div>
      </section>
      <section class="py-12 px-4">
        <h2 class="text-4xl mb-2 text-center leading-tight font-heading">Services</h2>
        <p class="text-center mb-12 text-gray-500">Let’s open a new chapter of your paper adventure!</p>
        <div>
          <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8"><img class="w-4/5 mx-auto" src="placeholders/pictures/new_ideas.svg" alt=""></div>
            <div class="md:w-1/2 px-8 mb-8"><span class="text-6xl">01</span>
              <h3 class="text-2xl mb-3 font-heading">Consult</h3>
              <p class="text-gray-500 leading-relaxed">During the phone call we will be able to present you all details of cooperation, pricing and special offers, suited for your company.</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8 md:order-1"><img class="w-4/5 mx-auto" src="placeholders/pictures/certificate.svg" alt=""></div>
            <div class="md:w-1/2 px-8 md:text-right"><span class="text-6xl">02</span>
              <h3 class="text-2xl mb-3 font-heading">Build</h3>
              <p class="text-gray-500 leading-relaxed">We can also talk during business meeting, or visit your office anytime you want! Our employees will provide proper contracts.</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center -mx-8">
            <div class="md:w-1/2 px-8 mb-8 order-none"><img class="w-4/5 mx-auto" src="placeholders/pictures/photocopy.svg" alt=""></div>
            <div class="md:w-1/2 px-8"><span class="text-6xl">03</span>
              <h3 class="text-2xl mb-3 font-heading">Data</h3>
              <p class="text-gray-500 leading-relaxed">You don’t buy a pig... or shall I say a paper in a poke. The supplies will be delivered to your company every first Monday of the month.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-8 px-4">
        <h2 class="text-3xl text-center leading-tight mb-8 font-heading">Our Work In Action</h2>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 mb-8 lg:w-1/3">
            <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md"><img class="mb-4 w-1/3" src="placeholders/logos/realweb.svg" alt=""><img class="rounded shadow-md mb-2 md:mb-3" src="placeholders/pictures/office.jpg" alt="">
              <p class="mb-4">Michael, the Manager? I swear, that man can really close deals with people. Such a nice contact, great quality products, professional service. And God knows, that company is fun at parties.</p>
              <p class="text-sm mb-12 text-gray-500">The Good Apparel</p><a class="mt-auto text-blue-700 hover:underline" href="#">Read the case study </a>
            </div>
          </div>
          <div class="w-full px-4 mb-8 lg:w-1/3">
            <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md"><img class="mb-4 w-1/3" src="placeholders/logos/plucky.svg" alt=""><img class="rounded shadow-md mb-2 md:mb-3" src="placeholders/pictures/office.jpg" alt="">
              <p class="mb-4">You know, mistakes happen. In the end, we are only people, right? The Manager recorder an apology video for me and gave me 6 months of free products. Thats the way you deal with stressful situations.</p>
              <p class="text-sm mb-12 text-gray-500">Event Driven Data Engineering Platform</p><a class="mt-auto text-blue-700 hover:underline" href="#">Read the case study </a>
            </div>
          </div>
          <div class="w-full px-4 mb-8 lg:w-1/3">
            <div class="flex flex-col h-full p-8 pb-6 rounded shadow-md"><img class="mb-4 w-1/3" src="placeholders/logos/gitscape.svg" alt=""><img class="rounded shadow-md mb-2 md:mb-3" src="placeholders/pictures/office.jpg" alt="">
              <p class="mb-4">Great offer, competitive prices, professional service. Thats how Id remember the Dunder Mifflin. Although I had to switch paper provider, sometimes</p>
              <p class="text-sm mb-12 text-gray-500">3D Process Automation</p><a class="mt-auto text-blue-700 hover:underline" href="#">Read the case study </a>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-8 px-4 pb-4">
        <h2 class="text-3xl mb-8 font-heading">Latest posts</h2>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-3 font-heading">Understanding the paper</h3>
                  <p class="text-gray-500">So you think you know everything about paper? False, you know nothing. Let me illuminate your first steps into my world.</p>
                </div></a></div>
          </div>
          <div class="w-full lg:w-2/4 px-4 mb-8">
            <div class="hidden lg:block relative rounded shadow-md bg-cover h-full" style="background-image: url('placeholders/pictures/work.jpg')"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span>
                <div class="p-6 flex items-end h-full text-white">
                  <div>
                    <h3 class="text-2xl mb-2 font-heading">Being world’s best boss</h3>
                    <p>The wise man once said: "Friend first, boss second, entertainer third". That man was me.</p>
                  </div>
                </div></a></div>
            <div class="lg:hidden relative rounded shadow-md pb-6 h-full"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/work.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-3 font-heading">Being world’s best boss</h3>
                  <p class="text-gray-500">The wise man once said: "Friend first, boss second, entertainer third". That man was me.</p>
                </div></a></div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-2 font-heading">Dwight doesn’t understand the paper</h3>
                  <p class="text-gray-500">Read it and finally find out that Dwight Schrute is merely a scammer.</p>
                </div></a></div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/work.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-2 font-heading">Why motorcycles are the best cars ever</h3>
                  <p class="text-gray-500">A few of my thoughts about cars, car accidents and life in the Dunder Mifflin Scranton office.</p>
                </div></a></div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-3 font-heading">Life & biznness</h3>
                  <p class="text-gray-500">Struggling to make ends meet? Selling guns and paper is the best solution.</p>
                </div></a></div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/work.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-3 font-heading">Why I shouldn’t have shown Creed how to set up a blog</h3>
                  <p class="text-gray-500">He hides horrific things in his mind.</p>
                </div></a></div>
          </div>
          <div class="w-full lg:w-1/4 px-4 mb-8">
            <div class="relative h-full pb-6 rounded shadow-md"><a href="#"><span class="absolute text-sm py-1 px-3 m-2 text-white font-semibold bg-indigo-500 rounded-full">label</span><img class="mb-4" src="placeholders/pictures/office.jpg" alt="">
                <div class="px-4">
                  <h3 class="text-xl mb-3 font-heading">Office meeting on the beach</h3>
                  <p class="text-gray-500">The history of how I ate 55 hot dogs and one fish in 15 minutes and beat world record. Also, our receptionist was saying some stuff.</p>
                </div></a></div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4 text-center">
        <h2 class="text-4xl mb-2 leading-tight font-heading">Technologies</h2>
        <p class="max-w-xl mx-auto mb-12 text-gray-500">Because no great company could exist without accountants, sellers, stock workers, and of course - paper.</p>
        <div class="flex flex-wrap -mx-4">
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">JavaScript</h3><span>Regional Manager</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/female_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Python</h3><span>Regional Manager</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Golang</h3><span>Assistant to the Regional Manager</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Swift</h3><span>Salesman</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/female_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Scala</h3><span>Salesman</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Rust</h3><span>HR Manager</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">PostgreSQL</h3><span>Marketing Director</span>
          </div>
          <div class="p-4 w-1/2 lg:w-1/4"><img class="mx-auto mb-4 rounded-full w-1/3" src="placeholders/pictures/female_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Neo4j</h3><span>Customer Service</span>
          </div>
        </div>
      </section>
      <section class="py-16 px-4">
        <div class="text-center"><span class="text-indigo-600">TAGLINE</span>
          <h2 class="text-3xl text-center mb-12 font-heading">Our Values</h2>
        </div>
        <div class="flex flex-wrap max-w-5xl -mx-4 -mb-8 md:mx-auto">
          <div class="w-full px-4 mb-8 md:w-1/2">
            <div class="h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow-md">
              <h3 class="text-2xl mb-3">Transparency </h3>
              <p>Forget about paper jams with our increased stability product. Ideal for high-quality printing and photocopying.</p>
            </div>
          </div>
          <div class="w-full px-4 mb-8 md:w-1/2">
            <div class="h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow-md">
              <h3 class="text-2xl mb-3">Empowerment </h3>
              <p>Multi-functional paper for various office needs. Snow-white sheets will shine bright like diamond for many years.</p>
            </div>
          </div>
          <div class="w-full px-4 mb-8 md:w-1/2">
            <div class="h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow-md">
              <h3 class="text-2xl mb-3">Agility</h3>
              <p>The best combination of quality and economy comes with our paper. The offer includes wides ranges of density.</p>
            </div>
          </div>
          <div class="w-full px-4 mb-8 md:w-1/2">
            <div class="h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow-md">
              <h3 class="text-2xl mb-3">XXX</h3>
              <p>The offer includes paper in wide range of density and sizes. Ideal for high-quality printing and photocopying.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-8 px-4 pb-4">
        <h2 class="text-4xl mb-2 leading-tight font-heading">Team</h2>
        <p class="max-w-xl mb-8 text-gray-500">Because no great company could exist without accountants, sellers, stock workers, and of course - paper.</p>
        <div class="flex flex-wrap -mx-4 text-center">
          <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow-md"><img class="mx-auto mb-4" src="placeholders/pictures/female_avatar.svg" alt="">
              <div class="px-8">
                <h3 class="text-xl font-heading font-semibold">Maxime Hardy</h3><span>Regional Manager at Utica branch</span>
                <div class="flex justify-center py-3 my-4 mx-12 border-t border-b"><img class="w-8 h-8 mx-3" src="placeholders/icons/message.svg" alt=""><img class="w-8 h-8 mx-3" src="placeholders/icons/share.svg" alt=""><img class="w-8 h-8 mx-3" src="placeholders/icons/star.svg" alt=""></div>
                <p>Started as a Sales representative at Stamford branch, moved to Scranton.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow-md"><img class="mx-auto mb-4" src="placeholders/pictures/male_avatar.svg" alt="">
              <div class="px-8">
                <h3 class="text-xl font-heading font-semibold">Victor Nitu</h3><span>Marketing Director</span>
                <div class="flex justify-center py-3 my-4 mx-12 border-t border-b"><img class="w-8 h-8 mx-3" src="placeholders/icons/message.svg" alt=""><img class="w-8 h-8 mx-3" src="placeholders/icons/share.svg" alt=""><img class="w-8 h-8 mx-3" src="placeholders/icons/star.svg" alt=""></div>
                <p>I started there as an Assistant and finally got a promotion to the Marketing Director.</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow-md"><img class="mx-auto mb-4" src="placeholders/pictures/female_avatar.svg" alt="">
              <div class="px-8">
                <h3 class="text-xl font-heading font-semibold">Michele Rexha</h3><span>ML Engineer</span>
                <div class="flex justify-center py-3 my-4 mx-12 border-t border-b"><img class="w-8 h-8 mx-3" src="placeholders/icons/message.svg" alt=""><img class="w-8 h-8 mx-3" src="placeholders/icons/share.svg" alt=""><img class="w-8 h-8 mx-3" src="placeholders/icons/star.svg" alt=""></div>
                <p>I work for Dunder Mifflin for a few years now. I learned a lot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 px-4">
        <h2 class="text-3xl mb-8 text-center font-heading">Contact</h2>
        <div class="flex flex-wrap items-center -mx-6">
          <div class="w-full lg:w-1/2 px-6 lg:px-24 mb-8 lg:mb-0"><img src="placeholders/pictures/new_ideas.svg" alt=""></div>
          <div class="w-full lg:w-1/2 px-6">
            <form>
              <div class="mb-4">
                <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Email">
              </div>
              <div class="mb-4">
                <select class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
                  <option>-- Select product --</option>
                  <option>Product 1</option>
                  <option>Product 2</option>
                  <option>Product 3</option>
                </select>
              </div>
              <div class="mb-4">
                <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5"></textarea>
              </div>
              <div>
                <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div class="flex flex-wrap items-center py-4 px-4 border-b">
          <div class="w-full lg:w-1/5 text-center lg:text-left"><a class="text-xl text-indigo-500 font-semibold" href="#">Phi Skills</a></div>
          <div class="w-full lg:w-3/5 mt-4 lg:mt-0 text-center"><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700" href="#">Services</a><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700" href="#">Team</a><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700" href="#">Customers</a><a class="inline-block mx-4 mb-4 lg:mb-0 text-blue-900 hover:text-blue-700" href="#">Blog</a></div>
          <div class="flex justify-center lg:justify-end w-full lg:w-1/5 my-2 lg:my-0"><img class="w-6 h-6" src="placeholders/icons/message.svg" alt=""><img class="w-6 h-6 mx-8" src="placeholders/icons/share.svg" alt=""><img class="w-6 h-6" src="placeholders/icons/star.svg" alt=""></div>
        </div>
        <div class="py-4 text-center"><span class="block md:inline-block mb-4 md:mb-0 mx-3">© 2020 Phi Skills</span><a class="inline-block mx-4 text-blue-900 hover:text-blue-700" href="#">Privacy Policy</a><a class="inline-block mx-4 text-blue-900 hover:text-blue-700" href="#">Term of Service</a></div>
      </footer>
    </div>
</main>