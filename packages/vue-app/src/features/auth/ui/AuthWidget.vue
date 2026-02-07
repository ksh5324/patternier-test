<template>
  <div>Auth</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = `auth`;
fetch("/api/auth");
</script>
