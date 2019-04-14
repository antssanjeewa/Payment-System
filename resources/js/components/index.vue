<template>
    <div class="container-fluid">
        <admin-board></admin-board> 
    </div>
</template>

<script>
    import admin from './ControlPanel'
    export default {
        components : {
            'admin-board' : admin
        }
    }
</script>
