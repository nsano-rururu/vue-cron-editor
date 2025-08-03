<template>
    <v-app>
        <v-container>
            <v-select
                :items="locales"
                label="Language"
                v-model="selectedLocale"
                dense
            ></v-select>
            <v-select
                label="Cron syntax"
                v-model="selectedSyntax"
                :items="syntaxes"
            >
            </v-select>
            <v-row fluid dense>
                <v-checkbox
                    label="minutes"
                    value="minutes"
                    v-model="visibleTabs"
                />
                <v-checkbox
                    label="hourly"
                    value="hourly"
                    v-model="visibleTabs"
                />
                <v-checkbox label="daily" value="daily" v-model="visibleTabs" />
                <v-checkbox
                    label="weekly"
                    value="weekly"
                    v-model="visibleTabs"
                />
                <v-checkbox
                    label="monthly"
                    value="monthly"
                    v-model="visibleTabs"
                />
                <v-checkbox
                    label="advanced"
                    value="advanced"
                    v-model="visibleTabs"
                />
            </v-row>
            <section>
                <h2>Basic</h2>
                <section>
                    <VueCronEditorBuefy
                        :visibleTabs="visibleTabs"
                        :preserveStateOnSwitchToAdvanced="true"
                        :locale="selectedLocale"
                        :cronSyntax="selectedSyntax"
                        v-model="sample1CronExpression"
                    ></VueCronEditorBuefy>
                </section>
                {{ sample1CronExpression }}
            </section>

            <section>
                <h2>Grid editing</h2>
                <v-data-table
                    :headers="headers"
                    :items-per-page="5"
                    :items="expressions"
                >
                    <template #top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title
                                >CRUD expressions sample</v-toolbar-title
                            >
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="900px">
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        v-bind="props"
                                        >New Expression</v-btn
                                    >
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5"
                                            >Adding a cron expression</span
                                        >
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <section>
                                                <h3>vue-cron-editor-buefy</h3>
                                                <VueCronEditorBuefy
                                                    v-model="editedItem.expression"
                                                    :visibleTabs="visibleTabs"
                                                    :preserveStateOnSwitchToAdvanced="true"
                                                    :locale="selectedLocale"
                                                    :cronSyntax="selectedSyntax"
                                                ></VueCronEditorBuefy>
                                            </section>
                                            cron expression:
                                            {{ editedItem.expression }}
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="close"
                                            >Cancel</v-btn
                                        >
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="save"
                                            >Save</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon size="small" class="me-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon size="small" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </section>
        </v-container>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import VueCronEditorBuefy from "./buefy/VueCronEditorBuefy.vue";
import { defaultLocales } from "./buefy/core/i18n";

const sample1CronExpression = ref("4 4 * * 0,2,3,5")
const headers = ref([
    { title: "Id", key: "id" },
    { title: "Expression", key: "expression" },
    { title: "Actions", key: "actions", sortable: false }
])
const expressions = ref([{ expression: "4 4 * * 0,2,3,5", id: 0 }])
const editedItem = ref({})
const dialog = ref(false)
const editedIndex = ref(-1)
const locales = ref(Object.keys(defaultLocales))
const selectedLocale = ref("en")
const selectedSyntax = ref("basic")
const visibleTabs = ref([
    "minutes",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "advanced"
])
const syntaxes = ref(["basic", "quartz"])

function editItem(item) {
    editedIndex.value = expressions.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}

function deleteItem(item) {
    const index = expressions.value.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
        expressions.value.splice(index, 1);
}

function close() {
    dialog.value = false;
    setTimeout(() => {
        editedIndex.value = -1;
        editedItem.value = {};
    }, 300);
}

function save() {
    if (editedIndex.value > -1) {
        Object.assign(
            expressions.value[editedIndex.value],
            editedItem.value
        );
    } else {
        const newIndex = expressions.value.push(editedItem.value);
        expressions.value[newIndex - 1].id = newIndex;
    }
    close();
}
</script>
