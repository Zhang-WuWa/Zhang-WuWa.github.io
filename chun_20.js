
练度流程列表['20词条'] =
{
    标题: '126.57w（同轴20词条拉表）（中间数值）',
    声骸配置: {
        "声骸-1": "44%爆伤+150攻击",
        "声骸-2": "30%属伤+100攻击",
        "声骸-3": "30%属伤+100攻击",
        "声骸-4": "18%攻击+2280生命",
        "声骸-5": "18%攻击+2280生命",
        "声骸-暴击": "42",
        "声骸-爆伤": "84",
        "声骸-大攻击": "45",
        "声骸-小攻击": "0",
        "声骸-普攻伤害加成": "45",
        "声骸-重击伤害加成": "0",
        "声骸-共鸣技能伤害加成": "0",
        "声骸-共鸣解放伤害加成": "0",
        "敌方等级": "100",
        "敌方抗性": "20"
    },
    buff_列表: 椿buff列表,
    流程: function () {

        this.add_buff('角色基础')
        this.add_buff('敌方属性')
        this.add_buff('椿-450-12攻-16爆')
        this.add_buff('裁春-588-24.3暴击-12攻')

        this.add_buff('沉日劫明-10湮灭')

        this.add_buff('梦魇·无冠者-12湮灭')
        this.add_buff('梦魇·无冠者-12普攻')
        this.add_buff('椿-温床-15湮灭')
        this.add_buff('椿-侵占-15普攻')

        for (const key in this.buff_列表) {
            if (!key.startsWith('声骸'))
                continue
            this.add_buff(key)
        }

        this.add_buff('守岸人-12.5暴击')
        this.add_buff('守岸人-15加深')
        this.add_buff('隐世回光-15攻-30s')
        this.add_buff('无归的谬误-10攻-20s')

        this.add_buff('散华-20攻-20s-6链')

        // 循环时，全程吃满
        this.add_buff('裁春-10普攻*3-14s-造成普攻伤害时', 3)
        this.add_buff('沉日劫明-7.5湮灭*4-15s-普攻或重击时', 4)


        this.add_action('变奏10级', 1.9881, '湮灭')
        this.add_action('test 变奏1级 7378', 1e-4, '湮灭')

        // 红AAE白ZAAE应该是必满的 9.47+8.98+24.45+22.08+9+18.96+21.1=114.04

        this.add_action('红A1 8892', 0.9633, '湮灭', '普攻', '酣梦')
        this.add_action('红A2 ', 0.4563 * 2, '湮灭', '普攻', '酣梦')
        this.add_action('test 红A2 4212', 0.4563 / 1e4, '湮灭', '普攻', '酣梦')

        this.add_action('红E', 0.5261 * 5, '湮灭', '普攻')
        this.add_action('test 红E 4856', 0.5261 / 1e4, '湮灭', '普攻')

        this.add_buff('散华-38普攻加深-14s')
        this.add_buff('轻云出月-22.5攻-15s')
        this.add_buff('无常凶鹭-12增伤-15s')

        this.add_buff('守岸人-25爆伤')

        this.add_action('变奏10级', 1.9881, '湮灭', '普攻', '酣梦')
        this.add_action('test 变奏1级 9237', 0.0001, '湮灭')
        this.add_action('R', 12.0281, '湮灭', '共鸣解放')
        this.add_action('test R 105171', 10.3909 / 1e4, '湮灭', '共鸣解放')

        this.add_action('白Z', 0.8814 * 3, '湮灭', '普攻')
        this.add_action('test 白Z 13415', 0.8814 / 1e4, '湮灭', '普攻')
        this.add_action('白A4', 0.2470 * 5, '湮灭', '普攻')
        this.add_action('test 白A4 3760', 0.2470 / 1e4, '湮灭', '普攻')
        this.add_action('白A5', 0.4817 * 4, '湮灭', '普攻')
        this.add_action('test 白A5 7332', 0.4817 / 1e4, '湮灭', '普攻')
        this.add_action('白E', 1.1362 * 2, '湮灭', '普攻')
        this.add_action('test 白E 17293', 1.1362 / 1e4, '湮灭', '普攻')

        this.add_buff('裁春-40普攻-10s-协奏消耗时')
        this.add_buff('酣梦-倍率提升50%~100%')

        this.add_action('一日花 218100', 12.6245, '湮灭', '普攻')

        // 9.47+8.98+24.45+22.08+36 = 100.98
        // 9.47+8.98+24.45+22.08+36/20*8+21 = 100.38
        this.add_action('红A1 33296', 0.9633, '湮灭', '普攻', '酣梦')
        this.add_action('红A2', 0.4563 * 2, '湮灭', '普攻', '酣梦')
        this.add_action('红E', 0.5261 * 5, '湮灭', '普攻', '酣梦')
        this.add_action('白Z', 0.8814 * 3, '湮灭', '普攻', '酣梦')
        this.add_action('白A4', 0.2470 * 20, '湮灭', '普攻', '酣梦')
        this.add_action('test 白A4 8552', 0.2470 / 1e4, '湮灭', '普攻', '酣梦')

        this.add_buff('酣梦-倍率提升50%~100%', -1)

        this.add_action('白A5 1段 16649/2', 0.4817, '湮灭', '普攻', '酣梦')

        this.add_buff('散华-38普攻加深-14s', -1)
        this.add_action('白A5 2段 6255', 0.4817, '湮灭', '普攻', '酣梦')
        this.add_action('白A5 3段 6255', 0.4817, '湮灭', '普攻', '酣梦')

        this.add_buff('轻云出月-22.5攻-15s', -1)
        this.add_buff('无常凶鹭-12增伤-15s', -1)
        this.add_action('白E 1段 13170', 1.1362, '湮灭', '普攻', '酣梦')
        this.add_buff('裁春-40普攻-10s-协奏消耗时', -1)
        this.add_action('白A5 4段 4894', 0.4817, '湮灭', '普攻', '酣梦')
        this.add_action('白E 2段 11544', 1.1362, '湮灭', '普攻', '酣梦')


        // E2-Z-5A4-A5-E1=95.59蕊=24.45+22.08+36/20*5+18.96+21.1
        // 22.08+36=58.088
        // 9.47+8.98+1.6*25=58.45

        this.add_action('Q 21488', 2.6460, '湮灭')
        this.add_action('延奏1段 26737', 3.2924, '湮灭')


        this.add_buff('守岸人-12.5暴击', -1)
        this.add_buff('守岸人-25爆伤', -1)

        this.add_buff('无归的谬误-10攻-20s', -1)

        this.add_action('延奏2段 32668', 4.5902, '湮灭')




    }

}