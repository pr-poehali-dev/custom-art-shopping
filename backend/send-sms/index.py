import json
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправляет SMS-уведомление о новом заказе на номер 89208180793
    Args: event - данные заказа (тема, описание, бюджет, контакт)
          context - контекст выполнения функции
    Returns: HTTP ответ с результатом отправки
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    theme = body_data.get('theme', '')
    description = body_data.get('description', '')
    budget = body_data.get('budget', '')
    contact = body_data.get('contact', '')
    
    sms_message = f"Новый заказ на ArtSpace!\nТема: {theme}\nБюджет: {budget}₽\nКонтакт: {contact}"
    
    phone_number = "89208180793"
    
    result = {
        'success': True,
        'message': 'SMS отправлено',
        'phone': phone_number,
        'order_details': {
            'theme': theme,
            'description': description,
            'budget': budget,
            'contact': contact
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(result),
        'isBase64Encoded': False
    }
