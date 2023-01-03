<script>
	import Location from './Location.svelte';
	import File from './File.svelte';
	//Declare variables to be posted

	let selected = '';
	let options = ['Alive', 'Dead'];
	let sightings = [];
	let name = '';
	let additionalInfo = '';
</script>

<div>
	<div class="md:grid md:grid-cols-3 md:gap-6">
		<div class="md:col-span-1">
			<!--To the side of the form, title and description-->
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">Pangolin App</h3>
				<p class="mt-1 text-sm text-gray-600">
					Please fill in the details about the Pangolin sighting along with a picture.
				</p>
			</div>
		</div>
		<div class="mt-5 md:col-span-2 md:mt-0">
			<!--Form-->
			<form method="POST" enctype="multipart/form-data">
				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="space-y-6 bg-white px-4 py-5 sm:p-6">
						<div class="grid grid-cols-3 gap-6">
							<div class="col-span-3 sm:col-span-2">
								<label for="company-website" class="block text-sm font-medium text-gray-700"
									>Name</label
								>
								<div class="mt-1 flex rounded-md shadow-sm">
									<input
										type="text"
										bind:value={name}
										name="name"
										id="name"
										class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										placeholder="Your name..."
										required
									/>
								</div>
							</div>
						</div>
						<div class="col-span-6 sm:col-span-3">
							<label for="status" class="block text-sm font-medium text-gray-700">Status</label>
							<select
								id="status"
								bind:value={selected}
								name="status"
								class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								required
							>
								{#each options as value}<option {value}>{value}</option>{/each}
							</select>

							{#if selected == 'Dead'}
								<label for="cod" class="block text-sm font-medium text-gray-700"
									>Cause of death</label
								>
								<select
									id="cod"
									name="cod"
									class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									required
								>
									<option id="fence_death_elec">Fence Death: Electrocution</option>
									<option id="fence_death_caught"
										>Fence Death: caught on non-electrified fence</option
									>
									<option id="road_death">Road Death</option>
									<option id="other">Other</option>
								</select>
							{/if}
						</div>

						<div>
							<label for="addinfo" class="block text-sm font-medium text-gray-700"
								>Additional Information</label
							>
							<div class="mt-1">
								<textarea
									id="addinfo"
									bind:value={additionalInfo}
									name="addinfo"
									rows="3"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									placeholder="Please write any additional notes..."
								/>
							</div>
						</div>

						<div>
							<div class="mt-4 space-y-4">
								<Location />
								<File />
							</div>
							<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
								<button
									type="submit"
									class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>Submit</button
								>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
