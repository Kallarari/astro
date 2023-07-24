<script>
  let count = 0;

  function handleIncrement() {
    count = count + 1;
  }
  function handleDecrement() {
    count = count - 1;
  }
</script>

<div>
  <h2>Counter: {count}</h2>
  <button on:click={handleIncrement}>Increment</button>
  <button on:click={handleDecrement}>Decrement</button>
</div>