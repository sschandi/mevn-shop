<template>
  <footer>
    <div class="container">
      <div class="footer-item">
        <h3>Created By S.S.Chandi</h3>
        <a target="_blank" href="https://sschandi.github.io">Portfolio</a>
      </div>
      <div class="footer-item">
        <h3>Lets Shop</h3>
        <p>Shopping Cart Demo using VueJS, NodeJS + Express, and MongoDB.</p>
        <p>Featuring add, edit, and delete shopping cart items</p>
      </div>
      <div class="footer-item">
        <h3>Features</h3>
        <p>Add, edit, and delete products.</p>
        <p>Local cache for shopping cart.</p>
        <p>Responsive design via FlexBox.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  box-shadow: 0 -7px 14px rgba(217,250,255,0.40), 0 -5px 5px rgba(0,0,0,0.22);
  margin-top: 2em;
  background-color: #404B69;
}
.container {
  justify-content: space-around;
  text-align: center;

}
.footer-item {
  max-width: 40vw;
}
p {
  color: #ffffff;
}
</style>
