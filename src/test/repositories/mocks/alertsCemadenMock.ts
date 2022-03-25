import { ICreateAlertsHistoryUseCase } from "@domain/Alerts/usecases";

const cemadenAlertsMock: ICreateAlertsHistoryUseCase.Params = {
	"alertas": [
		{
			"cod_alerta": 1041,
			"datahoracriacao": "21-02-2022 01:43:38",
			"ult_atualizacao": "21-02-2022 01:43:38",
			"codibge": 1200401,
			"evento": "Risco Hidrológico - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 1020,
			"datahoracriacao": "19-02-2022 22:05:45",
			"ult_atualizacao": "19-02-2022 22:05:45",
			"codibge": 3303401,
			"evento": "Movimentos de Massa - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 1076,
			"datahoracriacao": "22-02-2022 11:20:59",
			"ult_atualizacao": "22-02-2022 11:20:59",
			"codibge": 1200609,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1077,
			"datahoracriacao": "22-02-2022 14:05:56",
			"ult_atualizacao": "22-02-2022 14:05:56",
			"codibge": 1200302,
			"evento": "Risco Hidrológico - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 1078,
			"datahoracriacao": "22-02-2022 14:21:45",
			"ult_atualizacao": "22-02-2022 14:21:45",
			"codibge": 1301506,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1088,
			"datahoracriacao": "22-02-2022 16:31:54",
			"ult_atualizacao": "22-02-2022 16:31:54",
			"codibge": 3305802,
			"evento": "Movimentos de Massa - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1093,
			"datahoracriacao": "23-02-2022 09:10:24",
			"ult_atualizacao": "23-02-2022 09:10:24",
			"codibge": 2927408,
			"evento": "Movimentos de Massa - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 919,
			"datahoracriacao": "14-02-2022 16:51:54",
			"ult_atualizacao": "14-02-2022 16:51:54",
			"codibge": 3109402,
			"evento": "Risco Hidrológico - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 918,
			"datahoracriacao": "14-02-2022 16:49:12",
			"ult_atualizacao": "14-02-2022 16:49:12",
			"codibge": 3151206,
			"evento": "Risco Hidrológico - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 920,
			"datahoracriacao": "14-02-2022 16:56:58",
			"ult_atualizacao": "14-02-2022 16:56:58",
			"codibge": 3161106,
			"evento": "Risco Hidrológico - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 921,
			"datahoracriacao": "14-02-2022 17:01:51",
			"ult_atualizacao": "14-02-2022 17:01:51",
			"codibge": 3135209,
			"evento": "Risco Hidrológico - Alto",
			"nivel": "Alto",
			"status": 1
		},
		{
			"cod_alerta": 1110,
			"datahoracriacao": "24-02-2022 06:29:59",
			"ult_atualizacao": "24-02-2022 06:29:59",
			"codibge": 2607901,
			"evento": "Movimentos de Massa - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 988,
			"datahoracriacao": "17-02-2022 16:12:13",
			"ult_atualizacao": "17-02-2022 16:12:13",
			"codibge": 3303906,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 952,
			"datahoracriacao": "15-02-2022 17:05:33",
			"ult_atualizacao": "15-02-2022 17:05:33",
			"codibge": 3303906,
			"evento": "Movimentos de Massa - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1111,
			"datahoracriacao": "24-02-2022 10:53:40",
			"ult_atualizacao": "24-02-2022 10:53:40",
			"codibge": 1301654,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1112,
			"datahoracriacao": "24-02-2022 10:59:32",
			"ult_atualizacao": "24-02-2022 10:59:32",
			"codibge": 1301803,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1114,
			"datahoracriacao": "24-02-2022 14:03:39",
			"ult_atualizacao": "24-02-2022 14:03:39",
			"codibge": 3300506,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1115,
			"datahoracriacao": "24-02-2022 14:34:06",
			"ult_atualizacao": "24-02-2022 14:34:06",
			"codibge": 3139409,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1116,
			"datahoracriacao": "24-02-2022 14:36:15",
			"ult_atualizacao": "24-02-2022 14:36:15",
			"codibge": 3153509,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1117,
			"datahoracriacao": "24-02-2022 15:02:46",
			"ult_atualizacao": "24-02-2022 15:02:46",
			"codibge": 3124203,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1118,
			"datahoracriacao": "24-02-2022 15:05:37",
			"ult_atualizacao": "24-02-2022 15:05:37",
			"codibge": 3118007,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		},
		{
			"cod_alerta": 1119,
			"datahoracriacao": "24-02-2022 15:18:40",
			"ult_atualizacao": "24-02-2022 15:18:40",
			"codibge": 3203346,
			"evento": "Risco Hidrológico - Moderado",
			"nivel": "Moderado",
			"status": 1
		}
	],
	"atualizado": "25-02-2022 01:43:01 UTC"
}

export const getCemadenAlertsMock = () => ({...cemadenAlertsMock })