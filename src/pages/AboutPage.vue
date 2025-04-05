<template>
  <div class="container">
    <h1 class="title">About Us</h1>
    <div class="jumbotron">
      <img src="../assets/Chen.jpeg" alt="Chen Frydman" class="circle" />
      <div class="text-content">
        <h1 class="names"><b>Chen Frydman</b></h1>
        <p class="para">
          Chen Frydman is a student of Software and Information Systems Engineering at Ben Gurion University.<br>
          He is an ingenious engineer with a passion for technology and innovation.<br>
          He is a team player and a quick learner, always eager to take on new challenges and learn new things.
        </p>
        
        <a href="https://github.com/ChenFryd"><img src="../assets/GitHub.png" alt="GitHub" style="height: 40px;"/></a>
        <a href="https://www.linkedin.com/in/chen-frydman/"><img src="../assets/linkedin.png" alt="GitHub" style="height: 40px; margin-left: 10px;"/></a>
      </div>
    </div>

    <div class="jumbotron">
      <img src="../assets/Ofir.jpeg" alt="Ofir Tamir" class="circle" />
      <div class="text-content">
        <h1 class="names"><b>Ofir Tamir</b></h1>
        <p>
          Ofir Tamir is a student of Software and Information Systems Engineering at Ben Gurion University.<br>
          He is a leader and a team player, friendly and easy to work with.<br>
          He is a quick learner and always eager to take on new challenges and learn new things.
        </p>
        <a href="https://github.com/ofirtamir"><img src="../assets/GitHub.png" alt="GitHub" style="height: 40px;"/></a>
        <a href="https://www.linkedin.com/in/ofir-tamir/"><img src="../assets/linkedin.png" alt="GitHub" style="height: 40px; margin-left: 10px;"/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style lang="scss" scoped>
.circle {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 1200px;
}
.title {
  text-align: center;
}
.jumbotron {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.text-content {
  margin-left: 20px;
}
.names {
  color: #007bff;
  margin: 0;
}
.para {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
