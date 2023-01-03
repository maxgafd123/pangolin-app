<script>
// @ts-nocheck

	let selected = false;
    
    let latitude;
   
    let longitude;

    const getPosition = () => {

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            console.log(position);
        })
        } else {
            console.log("Geolocation not available")
        }


     
    }

   
</script>

<div class="flex items-start">
	<div class="flex h-5 items-center">
		<input
			bind:checked={selected}
			id="comments"
			type="checkbox"
			class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            on:click|once={getPosition}
		/>
	</div>
	<div class="ml-3 text-sm">
		<label class="font-medium text-gray-700">Allow use of location</label>
        <div>
		{#if selected}
        <label for="latitude" class="font-medium text-gray-700">Latitude:</label>
			<input
                readonly
				type="text"
				name="latitude"
				id="latitude"
				class="inline border border-gray-300 px-3 py-2 rounded-lg shadow-sm mb-5"
                bind:value={latitude}
			/>
            <label for="latitude" class="font-medium text-gray-700">Longitude:</label>
			<input
                readonly
				type="text"
				name="longitude"
				id="longitude"
				class="inline border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                bind:value={longitude}
			>
            <p>Location will be uploaded with information.</p>
		{/if}
       
        </div>
	</div>
</div>
