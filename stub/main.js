const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    if (minutes > 0) {
        return seconds > 0 ? `${minutes} min ${seconds} sec` : `${minutes} min`;
    } else {
        return `${seconds} sec`;
    }
};

const cooking_ingredients = {{COOKING_INGREDIENTS}};

const effect_index = {{EFFECT_INDEX}};

const reconstructors = {{RECONSTRUCTORS}};
