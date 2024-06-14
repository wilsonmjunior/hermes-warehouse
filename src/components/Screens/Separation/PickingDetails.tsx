import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Line, Svg } from "react-native-svg";
import { Text } from "react-native-paper";

import { SectionItem, ProductCode, PickingTraceability } from "@/components/common";
import { theme } from "@/config/theme";

const items = [{
    amount: 10,
    location: 'Testeo',
    order: 32134
}, {
    amount: 10,
    location: 'Testeo',
    order: 32134
}]

export function PickingDetails() {
    const parentHeight = useMemo(() => items.length * 60 ,[items.length])

    return (
        <View style={styles.container}>
            <View style={styles.product}>
                <Text style={styles.productTitle}>Materiais Elétricos Ltda</Text>
            </View>

            <ProductCode code="#001 - 1276/24" />

            <SectionItem name="Produto" value="Cinta Transversal 12B" />

            <View style={styles.traceability}>
               {
                    items.map((item, index) => (
                        <PickingTraceability
                            key={index}
                            amount={item.amount}
                            location={item.location}
                            order={item.order}
                        />
                    ))
               }

                <Svg height={parentHeight} width="1" style={[styles.dashed]}>
                    <Line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2={parentHeight}
                        stroke="#000"
                        strokeWidth="1"
                        strokeDasharray="4"
                    />
                </Svg>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    product: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.gray[100]
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: theme.colors.title[800],
    },
    traceability: {
        marginTop: 16,
    },
    dashed: {
        borderStyle: 'dashed',
        borderLeftWidth: 1,
        borderColor: theme.colors.gray[300],
        position: 'absolute',
        top: 32,
        left: 28,
    }
})
