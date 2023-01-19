import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    NewsTab: NavigatorScreenParams<NewsTabParamList>;
    NewsDetail: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type NewsTabParamList = {
    NewsList: undefined;
    FavoriteNewsList: undefined;
};

export type NewsTabScreenProps<T extends keyof NewsTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<NewsTabParamList, T>,
        NativeStackScreenProps<RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
