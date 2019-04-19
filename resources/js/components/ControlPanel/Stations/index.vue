<template>
    <div>
        <station-dialog></station-dialog>
        <station-table></station-table>
    </div>
</template>
<script>
import dialog from './StationAdd.vue'
import table from './StationTable.vue'

export default{
    data : () => ({

    }),
    components:{
        'station-dialog' : dialog,
        'station-table' : table
    }
}
</script>
