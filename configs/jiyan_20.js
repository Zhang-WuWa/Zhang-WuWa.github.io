练度流程列表['忌炎20'] = {
    标题: '忌炎20词条98.73w',
    声骸配置:
    {
        "声骸-1": "22%暴击+150攻击",
        "声骸-2": "30%属伤+100攻击",
        "声骸-3": "30%属伤+100攻击",
        "声骸-4": "18%攻击+2280生命",
        "声骸-5": "18%攻击+2280生命",
        "声骸-暴击": "42",
        "声骸-爆伤": "84",
        "声骸-大攻击": "45",
        "声骸-小攻击": "0",
        "声骸-普攻伤害加成": "0",
        "声骸-重击伤害加成": "45",
        "声骸-共鸣技能伤害加成": "0",
        "声骸-共鸣解放伤害加成": "0",
        "敌方等级": "100",
        "敌方抗性": "20",
    },
    buff_列表: {
        '角色基础': { 属性: { 暴击: 5, 爆伤: 150 } },
        // '敌方属性': { 属性: { 敌方等级: parseInt(参数设置.敌方等级), 抗性: parseInt(参数设置.敌方抗性) } },
        '忌炎': { 属性: { 等级: 90, 基础攻击: 437 - 1, 大攻击: 12, 暴击: 8 } },

        '忌炎-12爆伤': { 属性: { 爆伤: 12 } },
        '忌炎-10攻击': { 属性: { 大攻击: 10 }, 描述: '施放变奏技能攻其不备后，忌炎的攻击提升10%，持续15秒。' },
        '忌炎-20技能': { 属性: { 增伤: 20 }, 标签: '共鸣技能' },

        // '酣梦-倍率提升50%~100%': { 属性: { 倍率提升: 1.0 }, 标签: '酣梦' },

        '苍鳞千嶂': { 属性: { 基础攻击: 588, 爆伤: 48.6, 增伤: 12 } },
        '苍鳞千嶂-24重击': { 属性: { 增伤: 24 }, 标签: '重击', 描述: '每次施放变奏技能或共鸣解放时，自身重击伤害提升24%，可叠加2层，效果持续14秒。' },
        // '裁春-10普攻*3-14s-造成普攻伤害时': { 属性: { 增伤: 10 }, 标签: '普攻', 描述: '造成普攻伤害时，自身普攻伤害加成提升10%，持续14秒，每秒可触发1次，可叠加3层；' },
        // '裁春-40普攻-10s-协奏消耗时': { 属性: { 增伤: 40 }, 标签: '普攻', 描述: '自身的协奏能量消耗时，自身普攻伤害加成提升40%，持续10秒' },

        '啸谷长风-10气动': { 属性: { 增伤: 10 }, 标签: '气动' },
        '啸谷长风-30气动': { 属性: { 增伤: 30 }, 标签: '气动' },
        '飞廉之猩-12气动': { 属性: { 增伤: 12 }, 标签: '气动' },
        '飞廉之猩-12重击': { 属性: { 增伤: 12 }, 标签: '重击' },

        '莫特斐-38重击加深-14s': { 属性: { 加深: 38 }, 标签: '重击', 描述: '持续14秒' },
        '莫特斐-20攻': { 属性: { 大攻击: 20 } },

        '守岸人-12.5暴击': { 属性: { 暴击: 12.5 }, 描述: '星域持续时间30秒' },
        '守岸人-25爆伤': { 属性: { 爆伤: 25 }, 描述: '星域持续时间30秒' },
        '守岸人-15加深': { 属性: { 加深: 15 }, 描述: '队伍中的角色全伤害加深15%。最多存在30秒' },

        '轻云出月-22.5攻-15s': { 属性: { 大攻击: 22.5 }, 描述: '使用延奏技能后，下一个登场的共鸣者攻击提升22.5%，持续15秒' },
        '无常凶鹭-12增伤-15s': { 属性: { 增伤: 12 }, 描述: '下一个变奏登场的角色伤害提升12%，持续15秒。技能冷却：20秒' },

        '隐世回光-15攻-30s': { 属性: { 大攻击: 15 }, 描述: '自身为友方提供治疗时，全队共鸣者攻击提升15%，持续30秒' },
        '无归的谬误-10攻-20s': { 属性: { 大攻击: 10 }, 描述: '全队角色攻击提升10%，持续20秒。技能冷却：20秒' },

        // ...声骸属性,

        // '深塔-30攻': { 属性: { 大攻击: 30 }, 描述: '角色受到治疗时，全队攻击提升30%，持续20秒' },

    },
    流程: function () {

        this.add_buff('角色基础')
        this.add_buff('敌方属性')
        this.add_buff("忌炎")
        this.add_buff("忌炎-12爆伤")

        this.add_buff("苍鳞千嶂")

        this.add_buff("啸谷长风-10气动")

        for (const key in this.buff_列表) {
            if (!key.startsWith('声骸'))
                continue
            this.add_buff(key)
        }

        for (const key in this.buff_列表) {
            if (!key.startsWith('深塔'))
                continue
            this.add_buff(key)
        }

        this.add_buff('守岸人-15加深')
        this.add_buff('隐世回光-15攻-30s')

        this.add_action('Q 11363', 2.8336, '气动')
        this.add_buff("莫特斐-20攻")
        this.add_action('Q 10268', 2.3184, '气动')

        this.add_action('test E4级 3198', 0.6841 / 1e4, '气动', '共鸣技能')
        this.add_action('E', 1.0636 * 4, '气动', '共鸣技能')

        this.add_buff("飞廉之猩-12气动")
        this.add_buff("飞廉之猩-12重击")

        this.add_buff('无归的谬误-10攻-20s')

        this.add_buff('守岸人-12.5暴击')
        this.add_buff("守岸人-25爆伤")

        this.add_buff("莫特斐-38重击加深-14s")

        this.add_buff("轻云出月-22.5攻-15s")
        this.add_buff("无常凶鹭-12增伤-15s")

        this.add_buff("啸谷长风-30气动")
        this.add_buff("忌炎-10攻击")

        this.add_action('test 变奏1级 7500', 1 / 1e4, '气动')
        this.add_action('变奏 7500', 1.9881, '气动')

        this.add_buff("苍鳞千嶂-24重击", 2)
        this.add_buff("忌炎-20技能")

        this.add_action('test E4级 5785', 0.6841 / 1e4, '气动', '共鸣技能')
        this.add_action('E', 1.0636 * 4, '气动', '共鸣技能')
        this.add_action('E', 1.0636 * 4, '气动', '共鸣技能')

        this.add_action('test Z 8720', 0.6552 / 1e4, '气动', '重击')
        this.add_action('test R4级 12234', 0.9192 / 1e4, '气动', '重击')
        this.add_action('test R4级 36702', 2.7577 / 1e4, '气动', '重击')
        this.add_action('R 约61179.2', 1.4291 * 2 + 4.2873, '气动', '重击')

        this.add_action('7Z 约488400.7', 36.6912, '气动', '重击')





    }

}