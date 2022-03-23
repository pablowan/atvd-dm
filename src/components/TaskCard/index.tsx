import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface TaskProps extends TouchableOpacityProps {
    title: string, onPress:()=>void,
}

export function TaskCard({ title, onPress, ...rest }: TaskProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonTask}
            onPress={onPress}
            {...rest}
        >
            <Text style={styles.textTask}>
                {title}
            </Text>
        </TouchableOpacity>
    );
    
}