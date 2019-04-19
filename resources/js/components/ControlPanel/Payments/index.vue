<template>
    <div>
        <payment-dialog></payment-dialog>
        <payment-table></payment-table>
    </div>
</template>
<script>
import dialog from './PaymentAdd.vue'
import table from './PaymentTable.vue'

export default{
    data : () => ({

    }),
    components:{
        'payment-dialog' : dialog,
        'payment-table' : table
    }
}
</script>