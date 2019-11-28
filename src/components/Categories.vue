<template>
  <div class="categories-list-container">
    <ul class="mdc-list">
      <li class="mdc-list-item" tabindex="0">
        <span class="mdc-list-item__text">
          <i class="material-icons">whatshot</i>
          Hot
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">trending_up</i>
          Trending
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">query_builder</i>
          Fresh
        </span>
      </li>
    </ul>

    <p class="subheader">POPULAR</p>
    <ul class="mdc-list">
      <li class="mdc-list-item" tabindex="0">
        <span class="mdc-list-item__text">
          <i class="material-icons">
            mood
          </i>
          Funny
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <img class="category-img" src="../../public/blockstack-icon.png" />
          Blockstack
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">
            face
          </i>
          Memes
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">
            gif
          </i>
          GIFs
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">
            pets
          </i>
          Animals
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">
            videogame_asset
          </i>
          Gaming
        </span>
      </li>
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          <i class="material-icons">
            ondemand_video
          </i>
          Video
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Categories",
  props: {
    selected: String,
  }
}

</script>

<style scoped>


.category-img {
  width: 20px;
  position: relative;
  margin-right: 10px;
  top: 5px;
}


.subheader {
  color: gray;
  font-size: 14px;
  margin-top: 40px;
  margin-left: 16px;
  font-weight: 600;
}

.categories-list-container {
  width: 20%;
  position: fixed;
}
</style>
