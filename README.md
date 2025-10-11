CSS link `hiinformer/dist/styles/main.css`

Useage

import { useToast } from "hiinformer";

const toast = useToast();

toast.add({
    title: "hello",
    message: "World",
    status: "warning"
});