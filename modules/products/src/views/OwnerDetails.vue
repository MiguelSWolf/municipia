<template>
   <div id="parcel"></div>
</template>

<script>
import { mountRootParcel } from 'single-spa'

export default {
    props: ["ownerId"],
    mounted() {
        this.loadParcel();
    },
    methods: {
        loadParcel() {      
            try {      
                const domElement = document.getElementById('parcel')
                const parcelProps = {
                    domElement,
                    ownerId: this.ownerId
                }
                mountRootParcel(() => window.System.import("users"), parcelProps)
            } catch(err) {
                console.error(err);
            }
        }
    }
}
</script>