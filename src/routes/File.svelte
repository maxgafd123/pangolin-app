<script>
	// @ts-nocheck

	let fileInput;
	let container;
	let image;
	let showImage = false;

	function onChange() {
		const file = fileInput.files[0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);


			return;
		}
		showImage = false;
	}

	function removeImage() {
		showImage = false;
		fileInput.value = '';
	}

</script>

<div>
	<label class="block text-sm font-medium text-gray-700">Upload from gallery</label>
	<div
		class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
		id="imagetarget"
	>
		<div class="space-y-1 text-center">
			{#if !showImage}
				<svg
					class="mx-auto h-12 w-12 text-gray-400"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
					aria-hidden="true"
				>
					<path
						d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}

			<div bind:this={container} class=" text-sm text-gray-600">
				{#if showImage}
					<img bind:this={image} src="" alt="your image" />
					<button
						class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						on:click={removeImage}
						>Remove Image</button
					>
				{/if}
				<label
					for="file"
					class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
				>
				{#if !showImage}
					<span class="text-center">Upload a file</span>
				{/if}
					<input
						id="file"
						name="file"
						type="file"
						class="sr-only"
						accept="image/*"
						capture
						required
						bind:this={fileInput}
						on:change={onChange}
					/>
				
				</label>
			</div>
			<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
		</div>
	</div>
</div>
