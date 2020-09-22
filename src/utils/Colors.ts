const Colors = {
    headerIconColor: (a = 1) => {
        return `rgba(255, 255, 255, ${a})`;
    },
    darkBlue: (a = 1) => {
        return `rgba(41, 116, 240, ${a})`;
    },
    white: (a = 1) => {
        return `rgba(255, 255, 255, ${a})`;
    },
    lightGray: (a = 1) => {
        return `rgba(241, 241, 241, ${a})`;
    },
    black: (a = 1) => {
        return `rgba(33, 29, 29, ${a})`;
    },
    green: (a = 1) => {
        return `rgba(38, 165, 65, ${a})`;
    },
    fontColor: (a = 1) => {
        return `rgba(33, 33, 33, ${a})`;
    },
    fontGray: (a = 1) => {
        return `rgba(135, 135, 135, ${a})`;
    }
}

export default Colors;