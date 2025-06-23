const Pricing = () => { 
    return (
        <div class="bg-gray-100 py-16">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold">Plans & Tarifs</h2>
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          <div class="card bg-base-100 shadow-xltext-center">
            <h3 class="text-xl font-bold">Basic</h3>
            <p class="text-4xl font-bold my-4">$50/mo</p>
            <ul class="list-disc px-5">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button class="btn btn-primary mt-5">S'inscrire</button>
          </div>
          <div class="card bg-base-100 shadow-xl text-center">
            <h3 class="text-xl font-bold">Pro</h3>
            <p class="text-4xl font-bold my-4">$100/mo</p>
            <ul class="list-disc px-5">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button class="btn btn-primary mt-5">S'inscrire</button>
          </div>
          <div class="card bg-base-100 shadow-xl text-center">
            <h3 class="text-xl font-bold">Premium</h3>
            <p class="text-4xl font-bold my-4">$200/mo</p>
            <ul class="list-disc px-5">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button class="btn btn-primary mt-5">S'inscrire</button>
          </div>
        </div>
      </div>
      
    );
    };  
    export default Pricing;