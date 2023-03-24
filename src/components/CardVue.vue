<template>
  <div>
    <v-row class="list-class" no-gutters>
      <v-col cols="12">
        <div class="card">
          <h3>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h3>
          <p>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
          <div class="footer">
            <a href="">dawanlago1@gmail.com</a>
            <button>Ver mais</button>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <div class="card">
          <h3>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h3>
          <p>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
          <div class="footer">
            <a href="">dawanlago1@gmail.com</a>
            <button>Ver mais</button>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <div class="card">
          <h3>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h3>
          <p>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
          <div class="footer">
            <a href="">dawanlago1@gmail.com</a>
            <button>Ver mais</button>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <div class="card">
          <h3>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h3>
          <p>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
          <div class="footer">
            <a href="">dawanlago1@gmail.com</a>
            <button>Ver mais</button>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <div class="card">
          <h3>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </h3>
          <p>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
          <div class="footer">
            <a href="">dawanlago1@gmail.com</a>
            <button>Ver mais</button>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardVue",
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  min-height: 140px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0;
  margin-top: 10px;

  h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .footer {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--primary);
      text-decoration: none;
      text-transform: lowercase;
      font-size: 16px;
    }

    button {
      height: 100%;
      width: 146px;
      margin-right: -20px;
      background-color: var(--primary);
      border: none;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>