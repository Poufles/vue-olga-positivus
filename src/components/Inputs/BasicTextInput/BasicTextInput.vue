<template>
    <label for="" class="component basic-text-input">
        <div id="text-content">
            <p id="text">{{ label }} <span id="required-sign" v-if="isRequired">*</span></p>
            <p id="required" :class="{ show: isShow }" v-if="isRequired">Required</p>
        </div>
        <div id="input-content" :class="{ filled: inputValue !== '', focus: isFocus }">
            <input type="text" :name="{ id }" :id="{ id }" :placeholder="placeholder" v-if="!isTextArea" v-model="inputValue" @focus="CheckFocus()" @blur="CheckFocus()">
            <textarea name="" id="" v-else v-model="inputValue" @focus="CheckFocus()" @blur="CheckFocus()"></textarea>
        </div>
    </label>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    label: { type: String, required: true },
    placeholder: { type: String },
    isRequired: { type: Boolean, default: false },
    isTextArea: { type: Boolean, default: false },
    id: { type: String }
});

const emit = defineEmits([ 'validation' ]);

const inputValue = ref('');
const isFocus = ref(false);
const isShow = ref(false);

function Validate() {
    if (props.isRequired && inputValue.value !== '') {
        isShow.value = false;
        emit('validation', true);
    } else {
        isShow.value = true;
        emit('validation', false);
    };
};

function CheckFocus() {
    isFocus.value = !isFocus.value;
};
</script>

<style scoped>
#text-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

#required {
    display: none;
}

#required.show {
    display: block;
}

#input-content {
    background-color: var(--white);
    border: 2px solid var(--secondary-color);
    border-radius: 14px;
    padding: 18px 30px;
    position: relative;
    overflow: hidden;
}

#input-content::before {
    content: '';
    aspect-ratio: 1;
    background-color: var(--primary-color);
    border-radius: 50%;
    height: 0px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    transition: 0.2s;
}

input, textarea {
    background-color: transparent;
    border: 0;
    width: 100%;
    outline: none;
}

textarea {
    min-height: 190px;
    resize: none;
}

input::selection, textarea::selection {
    background-color: var(--primary-color);
}

/* LISTENERS */
#input-content:hover:before {
    height: 50px;
}

#input-content.filled::before,
#input-content.focus::before {
    height: 50px;
}
</style>