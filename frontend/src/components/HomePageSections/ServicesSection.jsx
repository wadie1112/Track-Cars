const ServicesSection = () => {
    return (
       <div class="bg-base-300 py-16">
       <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Real-Time Tracking</h2>
            <p>Monitor your fleet's location in real time.</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Cost Management</h2>
            <p>Separate professional and private expenses seamlessly.</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Maintenance Alerts</h2>
            <p>Keep your fleet in top shape with timely notifications.</p>
          </div>
        </div>
      </div>
      </div>
    );
    };
    export default ServicesSection;