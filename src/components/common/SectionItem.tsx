import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Card } from './Card';
import { theme } from '@/config/theme';

interface SectionItemProps {
  name: string;
  value: string;
}

export function SectionItem({ name, value }: SectionItemProps) {
  return (
    <Card>
        <Text variant="titleSmall" style={styles.name}>{name}</Text>
        <Text variant="titleSmall" style={styles.value}>{value}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
    name: {
        color: theme.colors.title[400]
    },
    value: {
        color: theme.colors.title[800]
    },
});
