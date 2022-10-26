<script lang='ts'>
  let title = document.querySelector("#appHubAppName").innerHTML
  let discountPrice = 43.99
  let originalPrice = 59.99
  let discountPercent = Math.ceil(((originalPrice - discountPrice) / originalPrice) * 100)

  const handleRedirect = () => {
    location.href=`http://127.0.0.1:5173/search?q=${title}`
  }

  //
</script>

<main class="pb-5">     
  <div on:click={handleRedirect} class="btn btn-lg justify-between w-[615px]">
    <p class="font-light normal-case">Buy {title} on Cheap.gg</p>
    <p class="font-light normal-case btn btn-sm btn-error ">Save {`${discountPercent}%`}</p>
    <p class="font-bold normal-case">{`$${discountPrice}`} <span class="text-sm line-through">{`$${originalPrice}`}</span></p>   
  </div>
</main>