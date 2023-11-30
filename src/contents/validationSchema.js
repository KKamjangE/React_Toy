import * as yup from "yup";

const errorMessages = {
    required: "필수 입력 항목입니다.",
    regexEngNum: "영문, 숫자만 입력 가능합니다.",
    min: (min) => `최소 ${min}자 이상이어야 합니다.`,
    max: (max) => `최대 ${max}자 까지만 가능합니다.`,
    confirmPassword: "비밀번호가 일치하지 않습니다.",
    regexNum: "숫자만 입력 가능합니다.",
};

const regexEngNum = /^[A-z0-9]+$/;

export const signInSchema = yup.object({
    userId: yup
        .string()
        .required(errorMessages.required)
        .matches(regexEngNum, errorMessages.regexEngNum)
        .min(4, errorMessages.min(4))
        .max(20, errorMessages.max(20)),
    password: yup
        .string()
        .required(errorMessages.required)
        .matches(regexEngNum, errorMessages.regexEngNum)
        .min(4, errorMessages.min(4))
        .max(20, errorMessages.max(20)),
});

export const signUpSchema = yup.object({
    name: yup
        .string()
        .required(errorMessages.required)
        .matches(regexEngNum, errorMessages.regexEngNum)
        .min(4, errorMessages.min(4))
        .max(10, errorMessages.max(10)),
    userId: yup
        .string()
        .required(errorMessages.required)
        .matches(regexEngNum, errorMessages.regexEngNum)
        .min(4, errorMessages.min(4))
        .max(20, errorMessages.max(20)),
    password: yup
        .string()
        .required(errorMessages.required)
        .matches(regexEngNum, errorMessages.regexEngNum)
        .min(4, errorMessages.min(4))
        .max(20, errorMessages.max(20)),
    confirmPassword: yup
        .string()
        .required(errorMessages.required)
        .matches(regexEngNum, errorMessages.regexEngNum)
        .min(4, errorMessages.min(4))
        .max(20, errorMessages.max(20))
        .oneOf([yup.ref("password"), null], errorMessages.confirmPassword),
});
