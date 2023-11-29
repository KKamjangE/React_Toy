const errorMessage = {
    required: "필수 입력 항목입니다.",
    invalid: (min, max) => `${min}~${max}자, 영문, 숫자만 입력 가능합니다.`,
    notMatchPwd: "비밀번호가 일치하지 않습니다.",
};

const useValidCheck = () => {
    const regex = /^[A-Za-z0-9]{5,15}$/;

    const checkId = (id) => {
        if (id === "") {
            return { error: errorMessage.required };
        }

        if (!regex.test(id)) {
            return { error: errorMessage.invalid(5, 15) };
        }

        return { error: null };
    };

    const checkPwd = (password) => {
        if (password === "") {
            return { error: errorMessage.required };
        }

        if (!regex.test(password)) {
            return { error: errorMessage.invalid(5, 15) };
        }

        return { error: null };
    };

    const checkSamePwd = (password, checkPassword) => {
        if (password === checkPassword) {
            return { error: null };
        } else {
            return { error: errorMessage.notMatchPwd };
        }
    };

    return { checkId, checkPwd, checkSamePwd };
};

export default useValidCheck;
